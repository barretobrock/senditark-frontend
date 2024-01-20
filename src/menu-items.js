import {
    Coffee,
    Home,
    Box,
    BarChart,
    UserX,
    FileText,
    Navigation,
    List,
    Server,
    Book,
    Sidebar,
    Briefcase,
    Menu, Power, Eye, Plus
} from 'react-feather';

const menuItems = {
    items: [
        {
            id: 'accounts',
            title: 'Accounts',
            type: 'group',
            icon: Navigation,
            children: [
                {
                    id: 'account-table',
                    title: 'Accounts',
                    type: 'item',
                    url: '/table/account',
                    icon: Briefcase,
                },
                {
                    id: 'new-account',
                    title: 'New Account',
                    type: 'item',
                    url: '/forms/new-account',
                    icon: Plus,
                }
            ]
        },
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: Navigation,
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dash',
                    icon: Home,
                },
                {
                    id: 'test-page',
                    title: 'Test page',
                    type: 'item',
                    url: '/test',
                    icon: Coffee,
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'UI ELEMENT',
            type: 'group',
            icon: UserX,
            children: [
                {
                    id: 'basic',
                    title: 'Component',
                    type: 'collapse',
                    icon: Box,
                    children: [
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/basic/badges'
                        },
                        {
                            id: 'breadcrumb',
                            title: 'Breadcrumb',
                            type: 'item',
                            url: '/basic/breadcrumb'
                        },
                        {
                            id: 'button',
                            title: 'Button',
                            type: 'item',
                            url: '/basic/button'
                        },
                        {
                            id: 'collapse',
                            title: 'Collapse',
                            type: 'item',
                            url: '/basic/collapse'
                        },
                        {
                            id: 'notification',
                            title: 'Notifications',
                            type: 'item',
                            url: '/basic/notifications'
                        },
                        {
                            id: 'pagination',
                            title: 'Pagination',
                            type: 'item',
                            url: '/basic/pagination'
                        },
                        {
                            id: 'tabs-pills',
                            title: 'Tabs & Pills',
                            type: 'item',
                            url: '/basic/tabs-pills'
                        },
                        {
                            id: 'typography',
                            title: 'Typography',
                            type: 'item',
                            url: '/basic/typography'
                        }
                    ]
                },
                {
                    id: 'charts',
                    title: 'Charts',
                    type: 'collapse',
                    icon: BarChart,
                    children: [

                        {
                            id: 'line-chart',
                            title: 'Line Chart',
                            type: 'item',
                            url: '/chart/line'
                        },
                        {
                            id: 'discrete-bar',
                            title: 'Discrete Bar',
                            type: 'item',
                            url: '/chart/discrete-bar'
                        },
                        {
                            id: 'multi-bar',
                            title: 'Multi Bar',
                            type: 'item',
                            url: '/chart/multi-bar'
                        },
                        {
                            id: 'pie',
                            title: 'Pie',
                            type: 'item',
                            url: '/chart/pie'
                        },
                        {
                            id: 'donut',
                            title: 'Donut',
                            type: 'item',
                            url: '/chart/donut'
                        }
                    ]
                },
                {
                    id: 'forms',
                    title: 'Forms & Tables',
                    type: 'collapse',
                    icon: FileText,
                    children: [
                        {
                            id: 'forms',
                            title: 'Form Elements',
                            type: 'item',
                            url: '/forms/form-basic',
                            icon: List,
                        },
                        {
                            id: 'tables',
                            title: 'Table',
                            type: 'item',
                            url: '/table/accounts',
                            icon: Server,
                        }
                    ]
                }
            ]
        },
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: Book,
            children: [
                {
                    id: 'account-table',
                    title: 'Account Table',
                    type: 'item',
                    url: '/table/account',
                    classes: 'nav-item',
                    icon: Briefcase
                },  {
                    id: 'account-info',
                    title: 'Account Info Test',
                    type: 'item',
                    url: '/view/account',
                    classes: 'nav-item',
                    icon: Eye
                },
                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: Sidebar
                },
                {
                    id: 'menu-level',
                    title: 'Menu Levels',
                    type: 'collapse',
                    icon: Menu,
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Menu Level 1.1',
                            type: 'item',
                            url: '#!'
                        },
                        {
                            id: 'menu-level-1.2',
                            title: 'Menu Level 2.2',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Menu Level 2.1',
                                    type: 'item',
                                    url: '#'
                                },
                                {
                                    id: 'menu-level-2.2',
                                    title: 'Menu Level 2.2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Menu Level 3.1',
                                            type: 'item',
                                            url: '#'
                                        },
                                        {
                                            id: 'menu-level-3.2',
                                            title: 'Menu Level 3.2',
                                            type: 'item',
                                            url: '#'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: Power
                }
            ]
        }
    ]
};

export default menuItems;