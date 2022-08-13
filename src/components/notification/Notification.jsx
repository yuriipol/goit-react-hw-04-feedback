import s from './Notification.module.css';

const Notification = ({ massege }) => {
  return <p className={s.notification}>{massege}</p>;
};

export default Notification;
