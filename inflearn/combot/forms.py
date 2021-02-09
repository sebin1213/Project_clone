from django import forms
from combot.models import Question, Answer

class AnswerFrom(forms.ModelForm):
    class Meta:
        model=Answer
        fields=['content']
        # labels={
        #     'content':'답변내용',
        # }


class QuestionForm(forms.ModelForm):
    class Meta:
        model=Question
        fields=['subject','content']

        # form 위젯 적용하기
        # widgets = {
        #     'subject' : forms.TextInput(attrs={'class':'form-control'}),
        #     'content' : forms.Textarea(attrs={'class':'form-control', 'rows':10}),
        # }
        # labels={
        #     'subject' : '제목',
        #     'content' : '내용',
        # }

# 장고 폼은 2개의 폼으로 구분
# forms.Form을 상속받을면 일반 폼
# forms.ModelForm을 상속받으면 모델 폼
# 모델 폼 객체를 저장하면 연결된 모델의 데이터를 저장할 수 있다.
# 폼 클래스는 반드시 Meta 클래스를 가져야 한다.
