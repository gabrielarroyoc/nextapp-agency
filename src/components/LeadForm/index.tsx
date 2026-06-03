'use client'

import { FormEvent, ReactNode, useMemo, useState } from 'react'
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Mail,
  Smartphone,
  Store,
  User2,
  Users2,
} from 'lucide-react'

type FieldProps = {
  icon: ReactNode
  label: string
  name: string
  placeholder: string
  type?: string
  inputMode?: 'text' | 'email' | 'tel' | 'numeric'
  min?: number
}

const fields: FieldProps[] = [
  {
    icon: <User2 className="h-4 w-4" />,
    label: 'Nome completo',
    name: 'name',
    placeholder: 'Seu nome completo',
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: 'E-mail profissional',
    name: 'email',
    placeholder: 'Digite seu e-mail',
    type: 'email',
    inputMode: 'email',
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    label: 'Telefone',
    name: 'phone',
    placeholder: 'Número de telefone',
    type: 'tel',
    inputMode: 'tel',
  },
  {
    icon: <Building2 className="h-4 w-4" />,
    label: 'Empresa',
    name: 'company',
    placeholder: 'Nome da empresa',
  },
  {
    icon: <Users2 className="h-4 w-4" />,
    label: 'Funcionários',
    name: 'employees',
    placeholder: 'Quantidade de funcionários',
    type: 'number',
    inputMode: 'numeric',
    min: 1,
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    label: 'Devs',
    name: 'developers',
    placeholder: 'Quantidade de devs',
    type: 'number',
    inputMode: 'numeric',
    min: 1,
  },
  {
    icon: <Briefcase className="h-4 w-4" />,
    label: 'Cargo',
    name: 'role',
    placeholder: 'Qual seu cargo?',
  },
  {
    icon: <Store className="h-4 w-4" />,
    label: 'Segmento',
    name: 'segment',
    placeholder: 'Segmento da empresa',
  },
]

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const statusMessage = useMemo(() => {
    if (submitted) {
      return 'Recebemos sua solicitação. Nosso time entrará em contato em breve.'
    }

    return 'Preencha os dados para agendar sua demonstração gratuita.'
  }, [submitted])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const form = event.currentTarget as HTMLFormElement

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      form.reset()
    }, 500)
  }

  return (
    <form className="space-y-6 bg-zinc-900 p-5 sm:p-8" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">
          Solicite uma demonstração gratuita
        </h3>
        <p className="text-sm text-zinc-400" aria-live="polite">
          {statusMessage}
        </p>
      </div>

      {submitted && (
        <div className="flex items-start gap-3 rounded-md border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-zinc-100">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
          <span>
            Solicitação enviada com sucesso. Use o formulário novamente se
            quiser cadastrar outra empresa.
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="sr-only">{field.label}</span>
            <span className="relative block rounded-md">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
                {field.icon}
              </span>
              <input
                className="h-[54px] w-full rounded-md border border-zinc-700 bg-zinc-800 p-2.5 pl-10 text-white outline-none transition placeholder:text-zinc-500 hover:border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                type={field.type ?? 'text'}
                name={field.name}
                placeholder={field.placeholder}
                inputMode={field.inputMode}
                min={field.min}
                required
              />
            </span>
          </label>
        ))}
      </div>

      <button
        className="w-full rounded-md border border-emerald-600 bg-emerald-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Agendar demonstração'}
      </button>
    </form>
  )
}
