export default function ButtonVite(props) {
  const { isPrimary, content } = props;
  return (
    <div className='pr-1 text-white'>
      <a href='' className={isPrimary ? 'btn-primary' : 'btn-secondary'}>
        {content}
      </a>
    </div>
  );
}
