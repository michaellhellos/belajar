import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Karyawan.css'; // Custom CSS for styling

const Karyawan = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(0);
  const navigate = useNavigate();

  // Fetch employees from the backend API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:5000/kariawan'); // API to get employees
        const data = await response.json();
        setEmployees(data.users); // Set users data
        setEmployeeCount(data.count); // Set the total employee count
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  // Handle firing or reactivating an employee based on isActive status
  const handleToggleEmployeeStatus = async (employee) => {
    const url = employee.isActive 
      ? `http://localhost:5000/dinonaktifkan/${employee._id}` 
      : `http://localhost:5000/mengaktifkan/${employee._id}`;

    try {
      await fetch(url, { method: 'PATCH' });
      setEmployees(employees.map(emp => 
        emp._id === employee._id 
          ? { ...emp, isActive: !emp.isActive } 
          : emp
      ));
    } catch (error) {
      console.error('Error updating employee status:', error);
    }
  };

  // Handle navigating to the add employee page
  const handleAddEmployee = () => {
    navigate('/addkariawan'); // Redirect to add employee page
  };

  return (
    <div className="karyawan-page">
      <header>
        <h1>Employee Management</h1>
      </header>

      <main>
        <button className="add-employee-btn" onClick={handleAddEmployee}>
          Add Employee
        </button>

        <div className="employee-summary">
          <h3>Total Employees: {employeeCount}</h3>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.email}</td>
                  <td>{employee.isActive ? 'Aktif' : 'Nonaktif'}</td>
                  <td>
                    <button
                      className={employee.isActive ? 'fire-btn' : 'rehire-btn'}
                      onClick={() => handleToggleEmployeeStatus(employee)}
                    >
                      {employee.isActive ? 'Pecat' : 'Rekrut Kembali'}
                    </button>
                    <button className="edit-btn" onClick={() => navigate(`/edit-employee/${employee._id}`)}>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>

      <footer>
        <p>You are logged in as Admin</p>
      </footer>
    </div>
  );
};

export default Karyawan;
