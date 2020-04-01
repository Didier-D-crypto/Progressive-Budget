//sw are supported 
if('serviceWorker' in navigator) {
    console.log('Service Worker supported')
    window.addEventListener('Load', () => {
        navigator.serviceWorker
        .register('../sw_cached_pages.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log(`Service Worker: Error: ${err}`))
    })
} 