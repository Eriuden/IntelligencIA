import Link from "next/link"
export const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1>{type}
       <span>Post</span>
      </h1>

      <p> 
        {type} et partagez d'incroyables idées avec le monde, laissez votre
        imagination s'exprimer pleinement avec l'IA
      </p>

      <form onSubmit={handleSubmit}
      className="mt-10 w-full flex flex-col gap-7">
        <label>
          <span className="text-gray-700">
            Votre idée
          </span>

          <textarea value={post.prompt}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Ecrivez votre idée"
          required
          />
        </label>

        <label>
          <span className="text-gray-700">
            Mots clés {` `}
            <span>(#webDev, #nextJs)</span>
          </span>

          <input value={post.tag}
          onChange={(e) => setPost({ ...post, tag :e.target.value})}
          placeholder="#mots-clés"
          required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Annuler
          </Link>

          <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange 
          rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}
