export default function AppFooter() {
  return (
    <footer className='mt-auto border-t border-slate-600 py-2'>
      <div className='mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} nasirMasud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
