/* eslint-disable react/prop-types */
const CompaniesCards = ({ companies, imageURL }) => {
  return (
    <div className="">
      <h2 className="my-16 text-6xl text-center">Production companies</h2>
      <div className=" bg-indigo-900 flex flex-wrap  text-center justify-center items-center gap-x-16 gap-y-24 py-16">
        {companies.production_companies.map((company) => (
          <div key={company.id} className="flex flex-col">
            {company.logo_path && (
              <>
                <img
                  className=""
                  src={`${imageURL}${company.logo_path}`}
                  alt="Movie Poster"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesCards;
