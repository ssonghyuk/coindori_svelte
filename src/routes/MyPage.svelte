<script lang="ts">
    import { Table, Input, Button } from 'sveltestrap';
    import { auth } from '../store.js';
  </script>
  

<article class="sub_wrap mypage_wrap container">
    <Table dark>
       <tbody>
            <tr>
                <th>이메일</th>
                <td>
                    {$auth.nickName} 
                </td>
            </tr>
            <tr>
                <th>닉네임</th>
                <td>
                    {$auth.nickName} 
                </td>
            </tr>
            <tr>
                <th>API</th>
                <td>
                    <Input
                    type=""
                    name=""
                    id=""
                    placeholder=""
                    />
                </td>
            </tr>
            <tr>
                <th>비밀번호</th>
                <td>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    />
                </td>
            </tr>
            <tr>
                <th>비밀번호 재입력</th>
                <td>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    />
                </td>
            </tr>
        </tbody>
    </Table>
    <div class="bt_wrap">
        <Button>저장</Button>
      </div>
</article>