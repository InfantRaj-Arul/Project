import './App.css';
import AppRoutes from './routes/AppRoutes';
import bg4 from './assets/Desktop - 74.png';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed Background Image with reduced coverage */}
      <div
        className="fixed top-25 left-20 right-20 bottom-0 -z-10"  // Reduced from all sides
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px', // Optional: adds rounded corners
        }}
      />

      {/* Main App Routes (Page Content) */}
      <div className="relative z-10">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;