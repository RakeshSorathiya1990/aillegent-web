type JsonLdData = Record<string, unknown> | Record<string, unknown>[]

/** Renders a JSON-LD structured-data script. Server component — safe to drop into any page. */
export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
