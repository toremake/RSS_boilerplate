export default {
    title: "Vare",
    name: "vare", 
    type: "document",
    fields: [
        {
            name: "varenavn",
            title: "Varenavn",
            type: "string"
        },
        {
            name: "mengde",
            title: "Mengde/antall",
            type: "string"
        },
        {
            name: "kategori",
            title: "Kategori",
            type: "reference",
            to: {type: "kategori"}
        }
    ]
}