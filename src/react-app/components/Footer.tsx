export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-light">
          © {currentYear} Josiel Barros. Desenvolvido com dedicação e expertise.
        </p>
      </div>
    </footer>
  );
}
