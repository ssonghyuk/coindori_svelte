<script>
    import { Route } from 'tinro';
    import Home from './routes/Home.svelte';
    import Join from './routes/Join.svelte';
    import Login from './routes/Login.svelte';
    import MyPage from './routes/MyPage.svelte';
</script>

<Route path="/"><Home /></Route>
<Route path="/Join"><Join /></Route>
<Route path="/login"><Login /></Route>
<Route path="/Mypage"><MyPage /></Route>