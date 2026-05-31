import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto flex-grow px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default MainLayout