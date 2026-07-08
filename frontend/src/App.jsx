import { useEffect, useState } from "react";
import axios from "axios";
import officeBg from "./assets/office-bg.jpg";

const API = "http://127.0.0.1:8000";

function App() {
  const [employees, setEmployees] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    department: "",
  });

  const getEmployees = async () => {
    try {
      const response = await axios.get(`${API}/employees`);
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      department: "",
    });

    setEditingId(null);
  };

  const saveEmployee = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(`${API}/employees/${editingId}`, form);
      } else {
        await axios.post(`${API}/employees`, form);
      }

      clearForm();
      getEmployees();
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  const editEmployee = (employee) => {
    setEditingId(employee.id);

    setForm({
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
    });
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete this employee?")) return;

    await axios.delete(`${API}/employees/${id}`);
    getEmployees();
  };

  const filteredEmployees = employees.filter((employee) => {
  const matchesSearch = (
    employee.first_name +
    " " +
    employee.last_name +
    " " +
    employee.department
  )
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesDepartment =
    departmentFilter === "All" ||
    employee.department === departmentFilter;

  return matchesSearch && matchesDepartment;
});

  return (
    <div className="container">
      <h1 className="title">Employee Dashboard</h1>

      <h2>{editingId ? "Update Employee" : "Add Employee"}</h2>

      <form onSubmit={saveEmployee}>
        <input
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          required
        />

        <input
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={clearForm}
            style={{ background: "gray" }}
          >
            Cancel
          </button>
        )}
      </form>

      <br />

      <div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
    alignItems: "center",
  }}
>
  <input
    placeholder="Search Employee..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={departmentFilter}
    onChange={(e) => setDepartmentFilter(e.target.value)}
  >
    <option>All</option>
    <option>IT</option>
    <option>HR</option>
    <option>Finance</option>
    <option>Marketing</option>
    <option>Sales</option>
    <option>Operations</option>
    <option>Support</option>
    <option>Administration</option>
  </select>
</div>

      <h2>Employees</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                {employee.first_name} {employee.last_name}
              </td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>

              <td>
                <button
                  onClick={() => editEmployee(employee)}
                  style={{
                    background: "#16a34a",
                    marginRight: "8px",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEmployee(employee.id)}
                  style={{
                    background: "#dc2626",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;