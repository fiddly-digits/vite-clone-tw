export default function DataCard(props) {
  const { icon, title, content } = props;
  return (
    <span className='bg-neutral-700 rounded-xl max-h-[222px]'>
      <article className='p-6'>
        <div className='flex rounded-xl bg-neutral-900 h-12 w-12 justify-center items-center mb-5'>
          {icon}
        </div>
        <h2 className='font-semibold'>{title}</h2>
        <p className='break-words pt-2'>{content}</p>
      </article>
    </span>
  );
}
