const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center'>
      <span className='text-4xl mb-4 text-emerald-600'>{icon}</span>
      <h4 className='text-xl font-semibold mb-2 text-gray-900'>{title}</h4>
      <p className='text-gray-600'>{text}</p>
    </article>
  );
};

export default SkillsCard;
