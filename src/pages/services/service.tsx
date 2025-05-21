import React, { use, useEffect, useState } from "react";
import Marquee from "../../components/Marquee";
import { useParams } from "react-router-dom";
import { Notification1 } from "../../models/models";
import { Notifications } from "../../static/static-data";
import { parseServiceTypeUpperCase } from "../../utils/utils";
import alert from "../../assets/icons/alert.gif";

const Service = () => {
  const params = useParams();
  const { serviceType } = params;
  const getNotifications = (serviceType: string) => {
    const notifications: Notification1[] = Notifications.filter(
      (notification) =>
        notification.notificationType === parseServiceTypeUpperCase(serviceType)
    );
    return notifications;
  };

  const [notifications, setNotifications] = useState<Notification1[]>([]);
  useEffect(() => {
    setNotifications(getNotifications(serviceType as string));
  }, []);
  return (
    <div className="service">
      <div className="d-flex justify-content-center align-items-center bg-warning p-1">
        {notifications.length > 0 ? (
          <Marquee
            children={notifications.map((notification) => (
              <span key={notification.id} className="fs-normal fw-medium me-5">
                {notification.isIcon && (
                  <img
                    src={alert}
                    className="me-2"
                    style={{ height: "24px" }}
                    alt="..."
                  />
                )}{" "}
                {notification.notificationMsg}
              </span>
            ))}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Service;
