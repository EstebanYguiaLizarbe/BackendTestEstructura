
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = 
    [
      {
        navCap: 'Home',
      },
      {
        displayName: 'Dashboard',
        iconName: 'solar:widget-add-line-duotone',
        route: '/dashboard',
      },
      {
        navCap: 'Ui Components',
        divider: true
      },
      {
        displayName: 'Badge',
        iconName: 'solar:archive-minimalistic-line-duotone',
        route: '/test01',
      },
      {
        displayName: 'Chips',
        iconName: 'solar:danger-circle-line-duotone',
        route: '/observable',
      },
      {
        displayName: 'Lists',
        iconName: 'solar:bookmark-square-minimalistic-line-duotone',
        route: '/ui-components/lists',
      },
      {
        displayName: 'Menu',
        iconName: 'solar:file-text-line-duotone',
        route: '/ui-components/menu',
      },
      {
        displayName: 'Tooltips',
        iconName: 'solar:text-field-focus-line-duotone',
        route: '/ui-components/tooltips',
      },
      {
        displayName: 'Forms',
        iconName: 'solar:file-text-line-duotone',
        route: '/ui-components/forms',
      },
      {
        displayName: 'Tables',
        iconName: 'solar:tablet-line-duotone',
        route: '/ui-components/tables',
      },
      {
        navCap: 'Auth',
        divider: true
      },
      {
        displayName: 'Login',
        iconName: 'solar:login-3-line-duotone',
        route: '/authentication/login',
      },
      {
        displayName: 'Register',
        iconName: 'solar:user-plus-rounded-line-duotone',
        route: '/authentication/register',
      },
      {
        navCap: 'Extra',
        divider: true
      },
      {
        displayName: 'Icons',
        iconName: 'solar:sticker-smile-circle-2-line-duotone',
        route: '/extra/icons',
      },
      {
        displayName: 'Sample Page',
        iconName: 'solar:planet-3-line-duotone',
        route: '/extra/sample-page',
      },
      {
        displayName: 'Perfil',
        iconName: 'solar:planet-3-line-duotone',
        route: '/perfil',
      },

      {
        displayName: 'Hospitales',
        iconName: 'solar:sticker-smile-circle-2-line-duotone',
        route: '/hospitales',
      },
      {
        displayName: 'Medicos',
        iconName: 'solar:sticker-smile-circle-2-line-duotone',
        route: '/medicos',
      },
    ];

    if ( role === 'ADMIN_ROLE' ) {
        menu.push(      {
          displayName: 'Usuarios',
          iconName: 'solar:sticker-smile-circle-2-line-duotone',
          route: '/usuarios',
        },)
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}
