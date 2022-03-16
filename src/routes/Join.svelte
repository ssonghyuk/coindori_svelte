<script lang="ts">
    import { Form, FormGroup,  Input, Label,Button } from 'sveltestrap';
</script>
  
<article class="sub_wrap join_wrap container">
  <Form>
      <h2>회원가입</h2>
    
      <FormGroup>
        <Label for="exampleEmail">이메일</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="abcd@gmail.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="d">닉네임</Label>
        <Input
          type=""
          name="d"
          id="d"
          placeholder="둘리"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">비밀번호 확인</Label>
        <Input
          type="password"
          name="password2"
          id="examplePassword2"
          placeholder="password2"
        />
      </FormGroup>
  </Form>
  <div class="bt_wrap">
    <Button>확인</Button>
  </div>
</article>