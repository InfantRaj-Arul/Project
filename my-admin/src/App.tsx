import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed Background Image with reduced coverage */}
      

      {/* Main App Routes (Page Content) */}
      <div className="relative z-10">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;