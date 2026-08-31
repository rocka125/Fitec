import { useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

const initialForm = { nombre: '', institucion: '', correo: '' }

function App() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: insertError } = await supabase.from('registrations').insert({
      nombre: form.nombre,
      institucion: form.institucion,
      correo: form.correo,
    })

    setLoading(false)

    if (insertError) {
      setError('No se pudo enviar tu registro. Intenta de nuevo.')
      return
    }

    setSubmitted(true)
  }

  return (
    <div className="page">
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      <header className="hero">
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

        <ul className="tags">
          <li>Tecnología</li>
          <li>Mipymes</li>
          <li>Conectividad</li>
        </ul>

        <div className="event-info">
          <p className="dates">1 – 3 Septiembre 2026</p>
          <p className="venue">Holiday Inn Villahermosa Aeropuerto</p>
        </div>
      </header>

      <main className="content">
        <section className="card form-card">
          {submitted ? (
            <div className="success">
              <span className="check">✓</span>
              <p>¡Gracias, {form.nombre}!</p>
              <p className="success-sub">Tu registro fue recibido.</p>
            </div>
          ) : (
            <>
              <h2>Regístrate</h2>
              <p className="subtitle">
                Completa tus datos para asegurar tu lugar en FITEC 2026.
              </p>

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

                {error && <p className="error">{error}</p>}

                <button type="submit" className="primary" disabled={loading}>
                  {loading ? 'Enviando…' : 'Enviar registro'}
                </button>
              </form>
            </>
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
