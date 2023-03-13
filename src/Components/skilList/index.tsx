import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function SkillList({ userId, skills, onRemoveSkill }) {
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
                <Text style={{ fontSize: 15, color: "#CCCC" }}>
                  level:{item.knowledge_level}
                </Text>
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
