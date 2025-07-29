import React from 'react';

type Notification = {
  title: string;
  body: string;
  institute: string;
  status: string;
};

const Notifications: Notification[] = [
  { title: 'Welcome', body: 'Creating Web', institute: 'Bharathidasan Uni', status: 'Unnn…' },
  { title: 'Design', body: 'Its a Course', institute: 'Bharathidasan Uni', status: 'Unnn…' },
  { title: 'Developing', body: 'Its one type of course', institute: 'Anna university', status: 'Unnn…' },
  { title: 'Datascience', body: 'Computer', institute: 'Bharathidasan Uni', status: 'Unnn…' },
];

export const Notification: React.FC = () => (
  <div className="p-6 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-2xl space-y-6">
    <div className="flex justify-around">
      {['Total Notifications','Seen Notifications','Unseen Notifications'].map((label) => (
        <div key={label} className="bg-white/60 backdrop-blur-md rounded-lg p-4 w-1/4 text-center">
          <div className="text-sm text-gray-600">{label}</div>
          <div className="mt-2 text-2xl font-semibold">0</div>
        </div>
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">+ Add Institute</button>
    </div>
    <div className="bg-blue-900 text-white rounded-t-lg px-4 py-2 grid grid-cols-5">
      {['Title','Body','Institute','Status','Actions'].map((h) => (
        <div key={h} className="font-medium">{h}</div>
      ))}
    </div>
    <div className="space-y-2">
      {Notifications.map((n,i) => (
        <div key={i} className="bg-white/50 backdrop-blur-md rounded-lg px-4 py-3 grid grid-cols-5 items-center">
          <div>{n.title}</div>
          <div>{n.body}</div>
          <div>{n.institute}</div>
          <div>{n.status}</div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Resend</button>
        </div>
      ))}
    </div>
  </div>
);
export default Notifications;
