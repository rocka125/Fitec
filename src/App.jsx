import { useState } from 'react'
import './App.css'

const initialForm = { nombre: '', institucion: '', correo: '' }

function App() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-top">
          <div className="brand">
            <div className="brand-mark">
              <span className="dot" />
              <span className="arrow" />
            </div>
            <div className="brand-text">
              <h1>FITEC</h1>
              <p>Foro Innovación y Tecnología</p>
            </div>
          </div>
          <div className="divider" />
          <ul className="tags">
            <li>Tecnología</li>
            <li>Mipymes</li>
            <li>Conectividad</li>
          </ul>
        </div>
        <p className="dates">1 – 3 Septiembre 2026</p>
      </header>

      <main className="content">
        <section className="card form-card">
          <h2>Regístrate</h2>
          <p className="subtitle">
            Completa tus datos para asegurar tu lugar en FITEC 2026.
          </p>

          {submitted ? (
            <div className="success">
              <p>¡Gracias, {form.nombre}! Tu registro fue recibido.</p>
              <button
                type="button"
                className="secondary"
                onClick={() => {
                  setForm(initialForm)
                  setSubmitted(false)
                }}
              >
                Registrar otra persona
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                Nombre
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  required
                />
              </label>

              <label>
                Institución
                <input
                  type="text"
                  name="institucion"
                  value={form.institucion}
                  onChange={handleChange}
                  placeholder="Empresa, universidad u organización"
                  required
                />
              </label>

              <label>
                Correo institucional
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="nombre@institucion.com"
                  required
                />
              </label>

              <button type="submit" className="primary">
                Enviar registro
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>FITEC 2026 · Organiza MetaSolutions, Fortress8 y Hackerdex</p>
      </footer>
    </div>
  )
}

export default App
