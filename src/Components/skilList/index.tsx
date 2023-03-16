import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function SkillList({
  userId,
  skills,
  onRemoveSkill,
  onUpdatePessoaSkill,
}) {
  return (
    <FlatList
      data={skills}
      numColumns={2}
      renderItem={({ item }) => {
        return (
          <>
            {userId != item.pessoa.id ? (
              <Text></Text>
            ) : (
              <View style={styles.card}>
                <Image
                  style={styles.imgCard}
                  source={{ uri: item.skill.image_url }}
                />
                <Text style={{ fontSize: 18, color: "#ffff" }}>
                  {item.skill.name}
                </Text>
                <Text style={{ fontSize: 12, color: "#CCCC" }}>
                  {item.skill.version}
                </Text>
                <View style={styles.divLevel}>
                  <TouchableOpacity
                    style={styles.buttonDecrease}
                    onPress={() =>
                      onUpdatePessoaSkill(item.id, item.knowledge_level - 1)
                    }
                  >
                    <Text style={{ fontSize: 20, color: "white" }}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.titleLevel}>
                    Level {item.knowledge_level}
                  </Text>

                  <TouchableOpacity
                    onPress={() =>
                      onUpdatePessoaSkill(item.id, item.knowledge_level + 1)
                    }
                    style={styles.buttonIncrease}
                  >
                    <Text style={{ fontSize: 20, color: "white" }}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 14, color: "#CCCC" }}>
                  {item.skill.description}
                </Text>
                <TouchableOpacity
                  style={styles.buttonDeletSkill}
                  onPress={() => onRemoveSkill(item.id)}
                >
                  <Text>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        );
      }}
    />
  );
}
