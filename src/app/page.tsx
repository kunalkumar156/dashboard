"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const sampleData = [
  {
    name: "Mon",
    email: 40,
    social: 30,
    ads: 50,
    leads: 30,
    conversion: 20,
    spend: 100,
  },
  {
    name: "Tue",
    email: 50,
    social: 40,
    ads: 70,
    leads: 45,
    conversion: 25,
    spend: 150,
  },
  {
    name: "Wed",
    email: 60,
    social: 45,
    ads: 90,
    leads: 60,
    conversion: 30,
    spend: 200,
  },
  {
    name: "Thu",
    email: 55,
    social: 35,
    ads: 80,
    leads: 50,
    conversion: 28,
    spend: 180,
  },
  {
    name: "Fri",
    email: 70,
    social: 50,
    ads: 100,
    leads: 70,
    conversion: 35,
    spend: 250,
  },
  {
    name: "Sat",
    email: 45,
    social: 30,
    ads: 60,
    leads: 55,
    conversion: 26,
    spend: 160,
  },
  {
    name: "Sun",
    email: 30,
    social: 20,
    ads: 40,
    leads: 40,
    conversion: 22,
    spend: 120,
  },
];

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [dateRange, setDateRange] = useState("last 7 days");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const totalLeads = sampleData.reduce((sum, d) => sum + d.leads, 0);
  const avgConversion = (
    sampleData.reduce((sum, d) => sum + d.conversion, 0) / sampleData.length
  ).toFixed(1);
  const totalSpend = sampleData.reduce((sum, d) => sum + d.spend, 0);

  const containerStyle = `min-h-screen p-6 transition-colors ${
    darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
  }`;

  const cardStyle = `p-4 rounded-xl shadow-md transition-colors ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`;

  const buttonStyle =
    "px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold";

  return (
    <div className={containerStyle}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-8"
      >
        <h1 className="text-4xl font-extrabold tracking-tight">
          Marketing Dashboard
        </h1>
        <button onClick={toggleDarkMode} className={buttonStyle}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <label htmlFor="dateRange" className="mr-2 font-medium">
          Date Range:
        </label>
        <select
          id="dateRange"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className={`p-2 rounded border outline-none transition ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-white border-gray-300"
          }`}
        >
          <option value="last 7 days">Last 7 Days</option>
          <option value="last 30 days">Last 30 Days</option>
          <option value="this month">This Month</option>
        </select>
      </motion.section>

      {/* Summary Cards */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        <div className={cardStyle}>
          <h3 className="text-sm font-medium text-gray-400">Total Leads</h3>
          <p className="text-2xl font-bold mt-1">{totalLeads}</p>
        </div>
        <div className={cardStyle}>
          <h3 className="text-sm font-medium text-gray-400">Avg. Conversion</h3>
          <p className="text-2xl font-bold mt-1">{avgConversion}%</p>
        </div>
        <div className={cardStyle}>
          <h3 className="text-sm font-medium text-gray-400">Total Spend</h3>
          <p className="text-2xl font-bold mt-1">${totalSpend}</p>
        </div>
      </motion.section>

      {/* Charts */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className={cardStyle}>
          <h2 className="text-lg font-semibold mb-2">Leads</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="leads" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={cardStyle}>
          <h2 className="text-lg font-semibold mb-2">Conversion Rate</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="conversion" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={cardStyle}>
          <h2 className="text-lg font-semibold mb-2">Total Spend</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="spend" stroke="#f59e0b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
      >
        <div className={cardStyle}>
          <h2 className="text-lg font-semibold mb-2">Email Performance</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="email" stroke="#ec4899" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={cardStyle}>
          <h2 className="text-lg font-semibold mb-2">
            Social Media Performance
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="social" stroke="#8b5cf6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={cardStyle}>
          <h2 className="text-lg font-semibold mb-2">Ads Performance</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ads" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.section>
    </div>
  );
}
