function SkillList({ src, skill }) {
  /* Check marks used for the skills section*/
    return (
      <span>
        <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;