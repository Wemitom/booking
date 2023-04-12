export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ');
}

const getMonth = (month: number) => {
  switch (month) {
    case 0:
      return 'января';
    case 1:
      return 'февраля';
    case 2:
      return 'марта';
    case 3:
      return 'апреля';
    case 4:
      return 'мая';
    case 5:
      return 'июня';
    case 6:
      return 'июля';
    case 7:
      return 'августа';
    case 8:
      return 'сентября';
    case 9:
      return 'октября';
    case 10:
      return 'ноября';
    case 11:
      return 'декабря';
    default:
      return 'null';
  }
};
export const formatDate = (date: Date) =>
  date.getDate() + ' ' + getMonth(date.getMonth()) + ' ' + date.getFullYear();

/**
 *
 * @param bool - Three state bool
 * @param stringTrue - String returned on true
 * @param stringFalse - String returned on false
 * @param stringNull - String return if bool is null
 * @returns Either stringTrue, stringFalse or stringNull
 */
export const threeStateBool = (
  bool: boolean | null,
  stringTrue: string,
  stringFalse: string,
  stringNull: string
) =>
  typeof bool === 'boolean' ? (bool ? stringTrue : stringFalse) : stringNull;
