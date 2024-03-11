import { PromptCard } from "./PromptCard"

export const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="text-left"> Profil de {name}</h1>
      <p className="text-left">{desc}</p>

      <div className="mt-10">
        {data.map((post)=> {
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit (post)}
            handleDelete={() => handleDelete && handleDelete (post)}
          />
        })}
      </div>
    </section>
  )
}
