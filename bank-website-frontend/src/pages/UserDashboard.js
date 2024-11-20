import React, { useState } from "react";
import "../styles/UserDashboard.css";
import { FaHome, FaWallet, FaMoneyBill, FaCog, FaUser } from "react-icons/fa";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("Overview");

  const username = "testuser"; // Example username
  const savingsBalance = 5000.0;
  const currentBalance = 1200.5;
  const transactions = [
    { date: "2024-11-15", account: "1234567890", time: "14:30", amount: 250.0 },
    { date: "2024-11-14", account: "9876543210", time: "10:15", amount: 500.0 },
    { date: "2024-11-13", account: "5555555555", time: "18:45", amount: 100.0 },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "Overview":
        return (
          <div>
            <h1>Hello {username}, welcome to Skyline Bank</h1>
            <div className="balances">
              <div className="balance-box">
                <h3>Current Balance</h3>
                <p>${currentBalance.toFixed(2)}</p>
              </div>
              <div className="balance-box">
                <h3>Savings Balance</h3>
                <p>${savingsBalance.toFixed(2)}</p>
              </div>
            </div>
            <div className="transactions">
              <h2>Transaction History</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Account</th>
                    <th>Time</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((txn, index) => (
                    <tr key={index}>
                      <td>{txn.date}</td>
                      <td>{txn.account}</td>
                      <td>{txn.time}</td>
                      <td>${txn.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        case "Account":
          return (
            <div>
              <h1>Account Summary</h1>
              <div className="account-summary">
                <div className="summary-box">
                  <h3>Account Type</h3>
                  <p>Savings Account</p>
                </div>
                <div className="summary-box">
                  <h3>Account Number</h3>
                  <p>XXXXX1234</p>
                </div>
                <div className="summary-box">
                  <h3>Opening Date</h3>
                  <p>2021-01-15</p>
                </div>
                <div className="summary-box">
                  <h3>Current Balance</h3>
                  <p>${savingsBalance.toFixed(2)}</p>
                </div>
              </div>
        
              <div className="recent-transactions">
                <h2>Recent Transactions</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Account</th>
                      <th>Time</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((txn, index) => (
                      <tr key={index}>
                        <td>{txn.date}</td>
                        <td>{txn.account}</td>
                        <td>{txn.time}</td>
                        <td>${txn.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
        
              <div className="account-actions">
                <button className="download-button">Download Account Statement</button>
                <button className="edit-button">Edit and Update Details</button>
              </div>
            </div>
          );
        
          case "Bill Payment":
            return (
              <div className="bill-payment-section">
                <h1>Manage Your Bills</h1>
                
                {/* Bill Payment Form */}
                <div className="bill-payment-form">
                  <h2>Make a Payment</h2>
                  <form>
                    <label>
                      Bill Category:
                      <select>
                        <option value="electricity">Electricity</option>
                        <option value="water">Water</option>
                        <option value="mobile">Mobile Recharge</option>
                        <option value="internet">Internet</option>
                        <option value="others">Others</option>
                      </select>
                    </label>
          
                    <label>
                      Recipient Account:
                      <input type="text" placeholder="Enter account number" />
                    </label>
          
                    <label>
                      Amount:
                      <input type="number" placeholder="Enter amount" />
                    </label>
          
                    <label>
                      Payment Method:
                      <select>
                        <option value="savings">Savings Account</option>
                        <option value="current">Current Account</option>
                      </select>
                    </label>
          
                    <button type="submit" className="submit-button">Pay Now</button>
                  </form>
                </div>
          
                {/* Transaction History */}
                <div className="bill-history">
                  <h2>Transaction History</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Recipient</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2024-11-15</td>
                        <td>Electricity</td>
                        <td>9876543210</td>
                        <td>$150.00</td>
                        <td>Success</td>
                      </tr>
                      <tr>
                        <td>2024-11-14</td>
                        <td>Water</td>
                        <td>1234567890</td>
                        <td>$50.00</td>
                        <td>Success</td>
                      </tr>
                      <tr>
                        <td>2024-11-13</td>
                        <td>Mobile</td>
                        <td>5555555555</td>
                        <td>$25.00</td>
                        <td>Failed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          
            case "Settings":
              return (
                <div className="settings-section">
                  <h1>Account Settings</h1>
                  
                  {/* Update Personal Details */}
                  <div className="settings-box">
                    <h2>Update Personal Details</h2>
                    <form>
                      <label>
                        Full Name:
                        <input type="text" placeholder="Enter full name" />
                      </label>
                      <label>
                        Email Address:
                        <input type="email" placeholder="Enter email address" />
                      </label>
                      <label>
                        Phone Number:
                        <input type="text" placeholder="Enter phone number" />
                      </label>
                      <button type="submit" className="save-button">Save Changes</button>
                    </form>
                  </div>
            
                  {/* Change Password */}
                  <div className="settings-box">
                    <h2>Change Password</h2>
                    <form>
                      <label>
                        Current Password:
                        <input type="password" placeholder="Enter current password" />
                      </label>
                      <label>
                        New Password:
                        <input type="password" placeholder="Enter new password" />
                      </label>
                      <label>
                        Confirm New Password:
                        <input type="password" placeholder="Re-enter new password" />
                      </label>
                      <button type="submit" className="save-button">Change Password</button>
                    </form>
                  </div>
            
                  {/* Notifications */}
                  <div className="settings-box">
                    <h2>Notification Preferences</h2>
                    <form>
                      <label>
                        <input type="checkbox" />
                        Receive Email Notifications
                      </label>
                      <label>
                        <input type="checkbox" />
                        Receive SMS Notifications
                      </label>
                      <button type="submit" className="save-button">Update Preferences</button>
                    </form>
                  </div>
                </div>
              );
            
      case "Profile":
        return <h2>Profile Section</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li
            className={activeSection === "Overview" ? "active" : ""}
            onClick={() => setActiveSection("Overview")}
          >
            <FaHome className="icon" />
            <span>Overview</span>
          </li>
          <li
            className={activeSection === "Account" ? "active" : ""}
            onClick={() => setActiveSection("Account")}
          >
            <FaWallet className="icon" />
            <span>Account</span>
          </li>
          <li
            className={activeSection === "Bill Payment" ? "active" : ""}
            onClick={() => setActiveSection("Bill Payment")}
          >
            <FaMoneyBill className="icon" />
            <span>Bill Payment</span>
          </li>
          <li
            className={activeSection === "Settings" ? "active" : ""}
            onClick={() => setActiveSection("Settings")}
          >
            <FaCog className="icon" />
            <span>Settings</span>
          </li>
          <li
            className={activeSection === "Profile" ? "active" : ""}
            onClick={() => setActiveSection("Profile")}
          >
            <FaUser className="icon" />
            <span>Profile</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">{renderContent()}</main>
    </div>
  );
};

export default UserDashboard;
