import path from 'path';
import csv from 'fast-csv';

export function importAttributes(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'attributes_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newAttributes = Attributes_OLD({
        pid: data[0],
        category: data[1],
        plant_type: data[2],
        persistence: data[3],
        ht_min: data[4],
        ht_max: data[5],
        spread_min: data[6],
        spread_max: data[7],
        growth_rate: data[8],
        hardy_min: data[9],
        hardy_max: data[10],
        light_min: data[11],
        light_max: data[12],
        moist_min: data[13],
        moist_max: data[14],
        environment: data[15],
        soil_condition: data[16],
        shape: data[17],
        bloom_color: data[18],
        bloom_time: data[19],
        bloom_attr: data[20],
        fruit_color: data[21],
        leaf_color: data[22],
        fall_color: data[23],
        attributes: data[24],
        soil_tolerance: data[25],
        uses: data[26],
        north_am: data[27]
      });
      newAttributes.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Attributes` });
    });
}

export function importFamilies(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'families_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newFamily = Family_OLD({
        fam_key: data[0],
        family: data[1],
        common_name: data[2]
      });
      newFamily.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Families` });
    });
}

export function importCommonNames(req, rex, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'commonnames_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newCommonName = CommonName_OLD({
        gs_key: data[0],
        name: data[1],
        is_preferred: data[2]
      });
      newCommonName.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Common Names` });
    });
}

export function importFieldCodes(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'fieldcodes_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newFieldCode = FieldCode_OLD({
        field_name: data[0],
        key_value: data[1],
        definition: data[2]
      });
      newFieldCode.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Field Codes` });
    });
}

export function importGenusSpecies(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'genusspecies_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newGenusSpecies = GenusSpecies_OLD({
        gs_key: data[0],
        name: data[1],
        fam_key: data[2],
        sort_name: data[3],
        is_alias: data[4],
        has_alias: data[5]
      });
      newGenusSpecies.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Genus Species` });
    });
}

export function importMembers(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'members_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newMember = Member_OLD({
        pid: data[0],
        nomenclature: data[1],
        basics: data[2],
        bloom: data[3],
        leaf: data[4],
        fruit: data[5],
        environment: data[6],
        native: data[7],
        landscape_uses: data[8],
        attr_features: data[9],
        special: data[10]
      });
      newMember.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Members` });
    });
}

export function importImages(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(
        __dirname,
        '..',
        '..',
        'HORTICOPIA_DATA',
        'images_dec_2018.csv'
      ),
      { headers: false }
    )
    .on('data', function(data) {
      const newPlantImage = PlantImage_OLD({
        pid: data[0],
        file_name: data[1],
        pix_preference: data[2]
      });
      newPlantImage.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ message: `Successfully imported ${count} Plant Images` });
    });
}

export function importPlants(req, res, next) {
  let count = 0;
  csv
    .fromPath(
      path.join(__dirname, '..', '..', 'HORTICOPIA_DATA', 'plant_dec_2018.csv'),
      { headers: false }
    )
    .on('data', function(data) {
      const newPlant = Plant_OLD({
        pid: data[0],
        gs_key: data[1],
        cultivar: data[2]
      });
      newPlant.save();
      count++;
    })
    .on('end', function() {
      return res
        .status(200)
        .send({ status: 200, message: `Succesfully imported ${count} Plants` });
    });
}

export function linkAttributes(req, res, next) {
  Attributes_OLD.find({}, (err, attributes) => {
    if (attributes) {
      attributes.map((item, index) => {
        //replace PID with objectid
        Plant_OLD.findOne({ pid: item.pid }, (err, plant) => {
          if (err) return res.status(400).send({ err });
          if (plant) {
            item.plant = plant._id;
            item.save();
            console.log(item);
          }
        });
      });
    }
  });
}

export function linkCommonNames(req, res, next) {
  CommonName_OLD.find({}, (err, cnames) => {
    if (cnames) {
      cnames.map((item, index) => {
        GenusSpecies_OLD.findOne({ gs_key: item.gs_key }, (err, gs) => {
          if (err) return res.status(400).send(err);
          if (gs) {
            item.genus_species = gs._id;
            item.save();
            console.log(item);
          }
        });
      });
    }
  });
}

export function linkMembers(req, res, next) {
  Member_OLD.find({}, (err, mems) => {
    if (mems) {
      mems.map((item, index) => {
        Plant_OLD.findOne({ pid: item.pid }, (err, plant) => {
          if (err) return res.status(400).send({ err });
          if (plant) {
            item.plant = plant._id;
            item.save();
          }
        });
      });
    }
  });

  return res.status(200).send({ status: 200, message: `Linked Members` });
}

export function linkPlants(req, res, next) {
  Plant_OLD.find({}, (err, plants) => {
    if (plants) {
      plants.map((item, index) => {
        GenusSpecies_OLD.findOne({ gs_key: item.gs_key }, (err, gs) => {
          if (err) {
            console.log(err);
            return res.status(400).send({ err });
          }
          if (gs) {
            item.genus_species = gs._id;
            console.log(item);
            item.save();
          }

          PlantImage_OLD.findOne({ pid: item.pid }, (err, pImage) => {
            if (err) {
              console.log(err);
              return res.status(400).send({ err });
            }
            if (pImage) {
              item.plant_image = pImage._id;
              item.save();
            }
          });
        });
      });
    }
  });
}
