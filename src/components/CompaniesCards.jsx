/* eslint-disable react/prop-types */
const CompaniesCards = ({ companies, imageURL }) => {
  return (
    <div className="bg-lightPink rounded-t-3xl mt-4">
      <h2 className="py-8 text-6xl text-center text-boldBlue">Production companies</h2>
      <div className=" bg-lightPink flex flex-wrap  text-center justify-center items-center gap-x-16 gap-y-24 py-16">
        {companies.production_companies.map((company) => (
          <div key={company.id} className="flex flex-col px-16">
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
