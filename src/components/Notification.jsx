import React, { useState, useEffect } from 'react';

function Notification() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNotification(true);
    }, 15000);
  });

  return (
    <div>
      {showNotification && (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>Не забудь оставить свою почту</span>
            <button className="btn btn-sm btn-circle btn-ghost" onClick={() => setShowNotification(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Notification;