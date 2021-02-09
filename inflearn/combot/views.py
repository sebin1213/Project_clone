from django.shortcuts import render, get_object_or_404, redirect
from .models import Question
from django.utils import timezone
from .forms import QuestionForm, AnswerFrom
from django.core.paginator import Paginator
# Create your views here.


# 질문목록 처리
def index(request):
    """     combot 목록 출력
    """
    # 입력 파라미터 설정
    page = request.GET.get('page','1') # http://서버주소/combot 으로 접근시 출력할 페이지를 1번 페이지로 설정
    question_list = Question.objects.order_by('-create_date') # 질문 DB의 레코드를 최근에 생성한 질문부터 출력
    # 페이징 처리
    paginator=Paginator(question_list,10) # 한 페이지의 출력 개수 설정
    page_obj = paginator.get_page(page)
    context = {'question_list': page_obj} # 10개의 질문만 출력
    return render(request, 'combot/community.html', context)


def community_post(request, question_id):
    question=get_object_or_404(Question, pk=question_id)
    context = {'question':question}
    return render(request, 'combot/community_post.html', context)


def answer_create(request, question_id):
    # 입력된 답변을 저장하고 다시 내용을 출력하는 함수
    question=get_object_or_404(Question,pk=question_id)
    if request.method=="POST": # 정상 접근이거나 답변등록버튼을 눌렀을 경우
        form=AnswerFrom(request.POST)
        if form.is_valid():
            answer=form.save(commit=False)
            answer.create_date = timezone.now()
            answer.user = request.user
            answer.question = question
            answer.save()
            return redirect('combot:community_post', question_id=question.id)
    else: # post 방식이 아닌 다른 형태로 접근했을 때
        form=AnswerFrom()
    context={'question':question,'form':form}
    return render(request, 'combot/community_post.html', context)

def question_create(request):
    if request.method == "POST":  # 정상 접근이거나 답변등록버튼을 눌렀을 경우
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            question.user = request.user
            question.create_date = timezone.now()
            question.save()
            return redirect('combot:community_post', question_id=question.id)
    else:  # post 방식이 아닌 다른 형태로 접근했을 때
        form = QuestionForm()
    context = {'form': form}
    return render(request, 'combot/community.html', context)


