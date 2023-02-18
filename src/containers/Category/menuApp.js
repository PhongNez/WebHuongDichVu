export const adminMenu = [
    { //hệ thống
        name: 'Quản lí', menus: [
            {
                name: 'Quản lí người dùng', link: '/system/user-manage',

                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
                //     { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
                // ]
            },
            {
                name: 'Quản lí danh mục', link: '/system/category'
            },
            {
                name: 'Quản lí sản phẩm', link: '/system/product'
            },
            {
                name: 'Quản lí đơn hàng', link: '/system/orders'
            },

            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];