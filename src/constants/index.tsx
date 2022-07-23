export const path = {
    public: {
        rootRoute: '/',
        loginRoute: '/login',
        signupRoute: '/register',
        shopRoute: '/shop',
        productRoute: '/products',
        contactRoute: '/contact',
        notFound: '/not-found'
    },
    private: {
        rootRoute: '/admin',
        zoomRoute: '/admin/zooms',
        listUserManager: '/admin/accounts',
        listBoxChat: '/admin/webchats',
        addBoxChat: '/admin/webchats/create',
        updateBoxChat: '/admin/webchats/:id/update',
    }
}