const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center w-full bg-[url('/grad.jfif')] bg-no-repeat bg-fixed bg-cover">
      {children}
    </div>
  )
}

export default AuthLayout