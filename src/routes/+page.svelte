<svelte:head>
    <link rel="stylesheet" href="public/css/main.css">
</svelte:head>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import BlogListing from './BlogListing.svelte';
</script>

<main>
    <div class="container py-5">
        <div class="row pb-5">
            <div class="col">
                <h1>Welcome to SvelteKit</h1>
                <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <BlogListing />
            </div>
        </div>
    </div>
</main>

