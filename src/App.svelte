<script>
    
    import Header from './components/Header.svelte';
    import Router from './Router.svelte';
    import Footer from './components/Footer.svelte';
    // import { auth, authToken } from './store';

    // $: {
    //     if($authToken){
    //         auth.isLogin();
    //     }
    //     else {
    //         auth.resetUserInfo();
    //     }
    // }

</script>

<main>
    <Header />
    
    <section class="main_section">
        <Router />
    </section>
    
    <Footer />
   
</main>


