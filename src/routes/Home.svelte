<script>
    import { auth } from '../store.js';
    import { Form, FormGroup, Input, Label } from 'sveltestrap';
    import { Button, Row, Col, Table, Container,Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle } from 'sveltestrap';
    import Login from './Login.svelte';
</script>


     <!-- {#if $uid != 0} -->
     
     <!-- {:else} -->
         <!-- <Login /> -->
     <!-- {/if} -->
    <article class="member_no container">
        <Login/>
    </article>
    <article class="member home">
        <Container>
            <Row>
                <Col xs="3">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th colspan="2">{$auth.nickName} 누적 수익</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >총수익</td>
                                <td>Mark <span>원</span></td>
                            </tr>
                            <tr>
                                <td >7일 수익</td>
                                <td>Jacob <span>원</span></td>
                            </tr>
                            <tr>
                                <td >30일 수익</td>
                                <td>Larry <span>원</span></td>
                            </tr>
                            <tr>
                                <td>24시간 수익</td>
                                <td>Larry <span>원</span></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card class="mb-3">
                        <CardHeader>
                            <CardTitle>포인트</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardSubtitle>잔여포인트</CardSubtitle>
                            <CardText>
                                10,000 <span>원</span>     
                            </CardText>
                            <Button>충전하기</Button>
                        </CardBody>
                        <!-- <CardFooter>Footer</CardFooter> -->
                    </Card>
                </Col>
                <Col xs="9">
                    <Container>
                        <h2>거래내역</h2>
                        <Row>
                            <Col xs="5">
                                <FormGroup>
                                    <!-- <Label for="exampleDate">Date</Label> -->
                                    <Input
                                      type="date"
                                      name="date"
                                      id="exampleDate"
                                      placeholder="date placeholder"
                                    />
                                  </FormGroup>
                            </Col>
                            <Col xs="5">
                                <FormGroup>
                                    <!-- <Label for="exampleDate">Date</Label> -->
                                    <Input
                                      type="date"
                                      name="date"
                                      id="exampleDate"
                                      placeholder="date placeholder"
                                    />
                                  </FormGroup>
                            </Col>
                            <Col xs="2" class="date_bt_box">
                                <Button>조회</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table bordered>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td >2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td >3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table bordered>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td >1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                       
                                    </tr>
                                    <tr>
                                        <td >2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                       
                                    </tr>
                                    <tr>
                                        <td >3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td >1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td >2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td >3</td>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                        </tr>
                                        </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Container>

                    

                </Col>
              </Row>
        </Container>    
    </article>
