import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:4000/graphql",
    generates: {
        "./src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            config: {
                withHooks: true,
                withComponent: false,
                withHOC: false
            }
        }
    },
    documents: ["./src/graphql/queries/*.graphql"],
};

export default config;