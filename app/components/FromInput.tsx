interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, ...props }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 opacity-70">{label}</label>
      <input 
        {...props} 
        className={`w-full p-4 rounded-2xl border bg-white dark:bg-slate-800 outline-none transition-all ${
          error 
          ? 'border-red-500 ring-1 ring-red-500' 
          : 'border-slate-200 dark:border-slate-700 focus:ring-2 ring-blue-500'
        }`} 
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-2 font-medium">{error}</p>}
    </div>
  );
}
