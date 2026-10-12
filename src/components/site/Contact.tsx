import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { eventTypes } from "@/data/site";
import { Cactus, Wavy } from "./Art";
import { ToonButton } from "./ToonButton";

const schema = z.object({
  nome: z.string().trim().min(2, "Ô forasteiro, como te chamam?").max(100, "Nome comprido demais pro cartaz!"),
  email: z.string().trim().min(1, "Ei, parceiro, faltou o e-mail!").email("Esse e-mail tá mais torto que cerca velha.").max(255),
  telefone: z.string().trim().min(8, "Sem telefone o pombo-correio se perde!").max(30, "Número grande demais, xerife."),
  tipo: z.enum(["bar", "casamento", "festival", "corporativo", "outro"], { errorMap: () => ({ message: "Escolhe o tipo de rodeio, cowboy!" }) }),
  data: z.string().min(1, "Quando é o baile? Marca a data aí!"),
  mensagem: z.string().trim().min(10, "Conta mais, o telegrama tá vazio!").max(1000, "Calma, isso já é um livro!"),
});
type Form = z.infer<typeof schema>;

const field = "w-full rounded-lg border-[3px] border-ink bg-cream px-3 py-2.5 text-lg shadow-hard-sm outline-none transition focus:-translate-y-0.5 focus:bg-cloud focus:ring-4 focus:ring-chili/40";

function Field({ label, error, children, className = "" }: { label: string; error?: string | undefined; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="font-display mb-1 block text-sm uppercase tracking-wide">{label}</span>
      {children}
      {error && <span role="alert" className="mt-1 inline-block -rotate-1 rounded bg-chili px-2 py-0.5 text-sm font-semibold text-cream">{error}</span>}
    </label>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Form) => {
    // TODO: integrar com backend / envio de e-mail
    console.log("Telegrama:", data);
    await new Promise((r) => setTimeout(r, 500));
    setSent(true);
    reset();
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-canyon pb-24 pt-20">
      <div className="halftone absolute inset-0 opacity-30" />
      <Cactus className="absolute bottom-0 left-2 hidden h-48 md:block" />
      <Cactus className="absolute bottom-0 right-4 hidden h-32 md:block" />
      <div className="relative mx-auto max-w-3xl px-4">
        <h2 className="toon-title -rotate-2 text-center text-5xl md:text-7xl">Contato</h2>
        <div className="paper toon relative mt-10 rotate-[0.6deg] rounded-sm p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b-4 border-dashed border-ink pb-4">
            <div>
              <p className="font-display text-2xl uppercase md:text-3xl">Western Telegraph Co.</p>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Mensagem urgente · stop · contratação</p>
            </div>
            <span className="rotate-6 rounded-md border-[3px] border-dashed border-chili px-3 py-1 font-display text-sm uppercase text-chili">Selo nº 0060</span>
          </div>

          {sent ? (
            <div className="flex flex-col items-center py-14 text-center">
              <div className="animate-stamp rounded-xl border-[6px] border-chili px-6 py-3 font-display text-4xl uppercase text-chili md:text-5xl">Telegrama enviado!</div>
              <p className="mt-6 text-lg">Recebido, parceiro. A gente responde antes do pôr do sol. Stop.</p>
              <ToonButton variant="sun" className="mt-6" onClick={() => setSent(false)}>Mandar outro</ToonButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 grid gap-5 md:grid-cols-2">
              <Field label="Nome" error={errors.nome?.message}><input className={field} autoComplete="name" {...register("nome")} /></Field>
              <Field label="E-mail" error={errors.email?.message}><input type="email" className={field} autoComplete="email" {...register("email")} /></Field>
              <Field label="Telefone / WhatsApp" error={errors.telefone?.message}><input type="tel" className={field} autoComplete="tel" {...register("telefone")} /></Field>
              <Field label="Tipo de evento" error={errors.tipo?.message}>
                <select className={field} defaultValue="" {...register("tipo")}>
                  <option value="" disabled>Escolha…</option>
                  {eventTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>
              </Field>
              <Field label="Data prevista" error={errors.data?.message} className="md:col-span-2"><input type="date" className={field} {...register("data")} /></Field>
              <Field label="Mensagem" error={errors.mensagem?.message} className="md:col-span-2">
                <textarea rows={5} className={field} placeholder="Conta tudo: local, horário, quantas botas no salão… stop." {...register("mensagem")} />
              </Field>
              <div className="md:col-span-2 flex justify-end">
                <ToonButton type="submit" size="lg" disabled={isSubmitting} className="-rotate-1">
                  {isSubmitting ? "Telegrafando…" : "Enviar telegrama ✉"}
                </ToonButton>
              </div>
            </form>
          )}
        </div>
      </div>
      <Wavy fill="var(--ink)" className="absolute -bottom-1 left-0 h-10 w-full" />
    </section>
  );
}
