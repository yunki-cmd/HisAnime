
import ListCards from "./ListCard"
import { DocumentNode, TypedDocumentNode, useQuery } from "@apollo/client";
import Loading from "../Loading/Loading";
import { Suspense } from "react";
import { motion } from "framer-motion";

interface Props {
  query: DocumentNode | TypedDocumentNode<any, {}>,
  variables: {},
  title?: string
  color?: string
}

function ListCardTopics({query, variables,title, color}:Props) {



  const { loading, error, data } = useQuery(query, { variables:variables });



  if (loading) {
    return (
      <Loading />
    )
  }


  return (
    <>
      <Suspense fallback={<Loading />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex flex-col mx-auto flex-wrap mb-2">
            <div className="my-2 flex justify-start items-center w-[70%] md:w-[85%] lg:w-[60%] mx-auto">
              <h3 className="p-2 text-3xl font-bold capitalize text-[#1976D2]" style={ {color:color ? color : '#1976D2'}}>
                {title}
              </h3>
            </div>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ListCards data={data} />
              </div>
            </div>
          </div>
        </motion.div>
      </Suspense>
    </>
  )


}

export default ListCardTopics