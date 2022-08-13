import s from './Notification.module.css';

const Notification = ({ massege, options }) => {
  const display = options.displayNotifications;
  return (
    <p className={s.notification} style={{ display }}>
      {massege}
    </p>
  );
};

export default Notification;
