import DashboardComponent from "../../../components/authenticatin/dashboard/dashboardComponent"

function Dashboard() {
  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
      <DashboardComponent/>
      </div>
  )
}

export default Dashboard