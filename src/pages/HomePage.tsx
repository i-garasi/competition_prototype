import React from 'react';
import { useAuthStore } from '../stores/authStore';

export default function HomePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        ようこそ、{user?.name}さん
      </h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          最近のアクティビティ
        </h2>
        <p className="text-gray-600">
          ここに最近のアクティビティや重要な通知が表示されます。
        </p>
      </div>
    </div>
  );
}