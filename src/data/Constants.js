export const CURRENCY = 'BYN';
export const TOASTOBJECTS = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
//import {TEXT} from "../../data/Constants"
//{TEXT.products}
// import 'moment/locale/ru';
// moment.locale('ru');
export const TEXT = {
  user: {
    name: 'Имя',
    email: 'Почта',
  },
  country: 'Страна',
  main: 'Главная',
  users: 'Пользователи',
  products: 'Товары',
  orders: 'Заказы',
  order_info: 'Информация заказа',
  detail: 'Подробнее',
  login: 'Войти',
  logout: 'Выйти',
  loading: 'Загрузка',
  tips: {
    add: 'Товар добавлен',
    update: 'Товар обновлен',
    delete: 'Вы уверены?',
  },
  forms: {
    add_title: 'Добавление товара',
    update_title: 'Добавление товара',
  },
  placeholder: 'Введите...',
  product: {
    title: 'Заголовок товара',
    stock: 'Кол-во в наличии',
    desc: 'Описание',
    img: 'Картинка',
    price: 'Цена',
  },
  roles: {
    admin: 'Администратор',
    customer: 'Покупатель',
  },
  errors: {
    notfound: 'Страница не найдена',
    stat: 'не подгрузилась',
    log_stat: 'график не подгрузился с MongoDb',
  },
  btns: {
    create: 'Создать',
    add: 'Добавить',
    update: 'Изменить',
  },
  order: {
    new: 'Новые заказы',
    id: 'Id заказа',
    shipping: 'Доставка',
    address: 'Адрес',
    pay: 'Оплата',
    date_create: 'Дата создания',
    mark_deliv: 'ПОМЕТИТЬ КАК ДОСТАВЛЕННОЕ',
    // delivery_time: 'Доставлено в',
    pay_time: 'Оплачено в',
    status: 'Статус',
    deliv: 'Доставлено',
    not_deliv: 'Не доставлено',
    paid: 'Оплачено',
    not_paid: 'Не оплачено',
    subtotal: 'Промежуточная сумма',
    shipping_cost: 'Стоимость доставки',
    grand_total: 'Общая сумма',
    product: 'Товар',
    qty: 'Кол-во',
    price: 'Цена за ед.',
    total: 'Всего',
  },
  statistics: {
    title: 'Статистика',
    products: 'Статистика товаров по годам',
    sub_products: 'сколько товаров создали в определенный год',
    sale: 'Статистика продаж  по месяцам',
    sub_sale: 'на какую сумму продали товара за месяц',
    users: 'Статистика пользователей',
    active_user: 'Зарегистрированных пользователей',
    total_sale: 'Всего оплачено',
    total_order: 'Всего заказов',
    total_product: 'Всего товаров',
  },
};
