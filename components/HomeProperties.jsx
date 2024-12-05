
import connectDB from "@/config/database";
import PropertyCard from "./PropertyCard";
import Property from "@/models/Property";


const HomeProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find({}).sort({createdAt:-1}).limit(3).lean();

  return (
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Recent Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>


    </>
  );
};

export default HomeProperties;