<script>
    //import { auth } from '../store.js';
    
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button, Row, Col, Table, Container,Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle } from 'sveltestrap';
   
</script>

<div class="login_wrap">
    <Form>
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
        <Label for="examplePassword">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="비밀번호"
        />
        </FormGroup>
      </Form>
      <div class="bt_wrap">
        <Button color="primary">로그인</Button>
        <Row>
          <Col xs="6" ><Button color="danger">회원정보찾기</Button></Col>
          <Col xs="6"><Button color="danger">회원가입</Button></Col>
        </Row>
      </div>
  </div>